# Module 1 — Deploy the banking API to Azure App Service

[Lab home](../README.md) · **Module 1 of 7** · [Next: Create the agent →](./02-create-agent.md)

| | |
| --- | --- |
| **Time** | 25 minutes |
| **You will** | Create a new resource group and a Premium v3 App Service plan in Australia East, then deploy the Contoso Bank app: its website, its banking API, and its MCP endpoint for AI agents |
| **You need** | An Azure subscription where you can create resource groups, and a PowerShell terminal on Windows |

All commands in this module are **PowerShell commands, and each one fits on a single line**. Copy a line, paste it, and press **Enter**. Nothing needs line breaks or `\` characters.

## Before you start

Use these settings for every resource in this module:

| Setting | Value | Why |
| --- | --- | --- |
| Region | `australiaeast` (fallback: `australiasoutheast`) | Keep **all** resources in the same region. |
| Pricing plan | **P0v3** (Premium v3, Linux) | The cheapest Premium SKU, about half the price of P1v3 |
| Runtime | Node.js 22 LTS | Node.js 20 reached end of support on 30 April 2026 |

> [!NOTE]
> At Azure retail prices, P0v3 Linux in Australia East costs about **USD 0.09 per hour (roughly USD 67 per month)** while it exists. Delete the resource group when the class ends ([Module 7](./07-test-and-clean-up.md#clean-up)). Check current prices on the [App Service pricing page](https://azure.microsoft.com/pricing/details/app-service/linux/).

## Step 1 — Open PowerShell and sign in

1. Open **Windows Terminal** or **PowerShell**. Windows PowerShell 5.1 and PowerShell 7 both work.
2. Check that the Azure CLI and Git are installed:

   ```powershell
   az --version
   git --version
   ```

   If either command says it isn't recognized, install the missing tool, and then **close and reopen PowerShell**:

   ```powershell
   winget install --id Microsoft.AzureCLI -e
   winget install --id Git.Git -e
   ```

3. Sign in, and then confirm you're using the class subscription:

   ```powershell
   az login
   az account show --query name -o tsv
   ```

   If it's the wrong subscription, switch to the right one:

   ```powershell
   az account set --subscription "<subscription name or ID>"
   ```

> [!TIP]
> Don't want to install anything? Open [Azure Cloud Shell](https://shell.azure.com), choose **PowerShell** (not Bash), and use the same commands from Step 2 onward. The one difference is Step 5.4: Cloud Shell runs on Linux, where `tar` can't make zip files. There, replace the two `tar` lines with `Compress-Archive -Path * -DestinationPath $ZIP -Force`. This works correctly in Cloud Shell, which runs PowerShell 7.

## Step 2 — Choose your names

Replace `<your-initials>` with something unique to you, such as `nw`. Use lowercase letters and numbers only. App names must be unique across all of Azure, so the command adds a random number.

```powershell
$INITIALS = "<your-initials>"
$LOCATION = "australiaeast"
$RG = "rg-contoso-bank-$INITIALS"
$PLAN = "asp-contoso-bank-$INITIALS"
$APP = "contoso-bank-$INITIALS-$(Get-Random -Minimum 10000 -Maximum 99999)"
"Your app name is: $APP"
```

Paste these six lines together. PowerShell runs them one after another.

> [!IMPORTANT]
> Write down your app name. PowerShell forgets these variables when you close the window. If that happens, run the first four lines again, and then set the app name to the one you wrote down, for example `$APP = "contoso-bank-nw-12345"`.

## Step 3 — Create the resource group

```powershell
az group create --name $RG --location $LOCATION
```

## Step 4 — Create the P0v3 App Service plan

Creating the plan is the real availability check. If P0v3 can't run in the region, this command fails with a clear error, and nothing is billed.

```powershell
az appservice plan create --name $PLAN --resource-group $RG --location $LOCATION --is-linux --sku P0V3
```

Confirm what you got:

```powershell
az appservice plan show --name $PLAN --resource-group $RG --query "{sku:sku.name, region:location, kind:kind}" -o table
```

The output should show `P0v3`, `Australia East`, and `linux`.

**If the plan command fails** with an error saying the SKU isn't available, the region has no capacity, or the pricing tier isn't allowed, switch to Australia Southeast and start again from Step 3:

```powershell
az group delete --name $RG --yes
$LOCATION = "australiasoutheast"
```

> [!NOTE]
> Don't use `az appservice list-locations` to decide whether P0v3 is available. Its results depend on your subscription and CLI version, and it can return nothing even when the plan would be created successfully.

## Step 5 — Create the web app and deploy the code

1. Download the code, and move into the **`app`** folder. This folder holds everything that gets deployed: `package.json`, `server.js`, the `api` folder (backend code), and the `web` folder (website). The lab instructions in the `lab` folder aren't deployed.

   ```powershell
   git clone https://github.com/msftnutta/asia-learning-hub.git
   Set-Location "asia-learning-hub/industry/FSI/Copilot-Studio/Contoso Banking Backend/app"
   Get-ChildItem
   ```

   The list should include `api`, `web`, `package.json`, and `server.js`. If you don't see them, you're in the wrong folder.

   If you're working from your own fork, replace `msftnutta` with your GitHub username. Forward slashes (`/`) in paths work in PowerShell.

2. Create the web app in your plan, with the Node.js 22 runtime:

   ```powershell
   az webapp create --name $APP --resource-group $RG --plan $PLAN --runtime "NODE:22-lts"
   ```

3. Turn on build automation, so App Service runs `npm install` when you deploy:

   ```powershell
   az webapp config appsettings set --name $APP --resource-group $RG --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true
   ```

4. Zip the contents of the `app` folder, and check what's inside:

   ```powershell
   $ZIP = Join-Path ([System.IO.Path]::GetTempPath()) "contoso-bank.zip"
   Remove-Item $ZIP -ErrorAction SilentlyContinue
   tar -a -c -f $ZIP --exclude node_modules *
   tar -tf $ZIP
   ```

   The last command lists the files in the zip. Check that you see `server.js`, `package.json`, `api/`, and `web/`, and that the paths use forward slashes (`/`), for example `web/index.html`. **If you see backslashes (`\`), don't deploy.** Run the lines above again, and make sure you typed `tar`, not `Compress-Archive`.

   Then deploy the zip:

   ```powershell
   az webapp deploy --name $APP --resource-group $RG --src-path $ZIP --type zip
   ```

   Run these lines **inside the `app` folder**, so that `package.json` and `server.js` sit at the top of the zip. `--exclude node_modules` keeps a local `node_modules` folder out of the zip, if you ran `npm install` earlier. The deployment installs the dependencies and starts the app with `npm start`. It takes about 2–4 minutes.

> [!IMPORTANT]
> **Use `tar`, not `Compress-Archive`, to make the zip.** In Windows PowerShell 5.1, which is the default on Windows, `Compress-Archive` stores file paths with backslashes, such as `api\bankingApi.js`. Linux App Service can't copy those files into place, so the build succeeds but the deployment then fails with a `400` error. `tar` is built into Windows 10 and 11 and stores the paths correctly.

> [!NOTE]
> Older guides use `az webapp up` for this step. That command is deprecated, and the Azure CLI shows a warning if you run it. Use the commands above instead.

## Step 6 — Get your URLs and check the API and the MCP endpoint

```powershell
$AppHost = az webapp show --name $APP --resource-group $RG --query defaultHostName -o tsv
"Website:      https://$AppHost/"
"MCP URL:      https://$AppHost/mcp"
Invoke-RestMethod "https://$AppHost/health"
Invoke-RestMethod "https://$AppHost/api/login?userId=USER001"
(Invoke-RestMethod -Method Post -Uri "https://$AppHost/mcp" -ContentType "application/json" -Headers @{Accept="application/json, text/event-stream"} -Body '{"jsonrpc":"2.0","id":1,"method":"tools/list"}').result.tools.name
```

The last command asks the **MCP endpoint** which tools it offers. You should see ten tool names, from `demo_login` to `purchase_voucher`. Your agent will use these tools in [Module 3](./03-connect-bank-tools.md).

**Copy the MCP URL** (the line that starts with `MCP URL:`). You'll paste it into Copilot Studio in [Module 3](./03-connect-bank-tools.md). To open the website in your browser, run:

```powershell
Start-Process "https://$AppHost/"
```

> [!TIP]
> Always copy the host name from this command rather than typing it. For apps created with these commands it's usually `<your-app-name>.azurewebsites.net`, but Azure can add a random suffix and the region to the name, so don't assume. The variable is named `$AppHost` because `$Host` is a reserved name in PowerShell.

### ✅ Checkpoint

- `/health` shows `status` with the value `ok`.
- `/api/login?userId=USER001` shows `accountId` with the value `ACC001`.
- The last command lists ten tool names.
- The website opens in your browser, and `https://<your-host>/api-docs` shows the API reference, including a section about the MCP endpoint.

## Optional — Continuous deployment from GitHub

Only use this if you want every push to your fork to redeploy the app automatically. The rest of the lab doesn't need it.

1. Fork this repository to your GitHub account.
2. In the Azure portal, open your web app and select **Deployment Center**.
3. Set **Source** to **GitHub**, and then select your organization, repository, and the `main` branch.
4. Under **Authentication type**, choose **User-assigned identity**. This option avoids storing a publish-profile password in GitHub.
5. Select **Save**. Azure commits a workflow file to `.github/workflows/` in your fork.
6. Edit that workflow in GitHub. It builds from the **repository root**, but this app lives in a subfolder, so the build fails until you change it:
   - Add `working-directory: 'industry/FSI/Copilot-Studio/Contoso Banking Backend/app'` to the `npm install` step.
   - Change the path that gets uploaded or zipped, and the `package` value in the deploy step, to that same folder.

   Step names differ between generated workflows. The rule is that each path must point to the `app` folder, which contains `package.json`.
7. Commit the change, and then watch the run on your fork's **Actions** tab.

> [!CAUTION]
> This repository is public. Never commit publish profiles, passwords, keys, or connection strings. The demo API doesn't need any secrets.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `az` or `git` "is not recognized as the name of a cmdlet" | The tool isn't installed, or PowerShell was open during the install. Run the `winget` commands from Step 1, and then close and reopen PowerShell. |
| `was unexpected at this time` after an `az` command you edited | On Windows, `az` runs through `cmd.exe`, which can't handle parentheses or `|` characters in `--query` text. Use the commands exactly as written. |
| A command says a variable such as `$APP` is empty, or the name is missing | You opened a new PowerShell window. Run Step 2 again, and set `$APP` to the name you wrote down. |
| The browser shows **Application Error**, or the logs say `Cannot find module 'express'` | Build automation didn't run. Repeat Step 5.3, and then repeat Step 5.4. |
| `az webapp deploy` fails with `Kudu Status : 400`, and the deployment log shows `rsync: … failed to stat "…/api\bankingApi.js"` | The zip has backslashes in its file paths. You made it with `Compress-Archive` in Windows PowerShell 5.1. Run the `tar` lines from Step 5.4 instead, check that `tar -tf $ZIP` shows `/` and not `\`, and deploy again. To see the log, run `az webapp log deployment show --name $APP --resource-group $RG`. |
| The logs say `Cannot find module '/home/site/wwwroot/server.js'` | The zip was created in the wrong folder. Run the `Set-Location` command from Step 5.1, check that `Get-ChildItem` shows `server.js`, and then repeat Step 5.4. |
| `tar` "is not recognized" | Your Windows version is older than Windows 10 (version 1803). Use a newer PC, or Azure Cloud Shell in PowerShell mode. |
| SKU not available, a capacity error, or the pricing tier isn't allowed | Run `az group delete --name $RG --yes`, then `$LOCATION = "australiasoutheast"`, and repeat Steps 3–5. |
| `Website with given name already exists` | App names are global. Run `$APP = "contoso-bank-$INITIALS-$(Get-Random -Minimum 10000 -Maximum 99999)"`, and repeat Steps 5.2–5.4. |
| The browser shows **Application Error** and the cause isn't clear | Run `az webapp log tail --name $APP --resource-group $RG` and read the error. Press **Ctrl+C** to stop. |
| Balances look wrong after testing | The data is in memory. Run `az webapp restart --name $APP --resource-group $RG` to reset it. |

---

[Lab home](../README.md) · [Next: Create the agent →](./02-create-agent.md)
