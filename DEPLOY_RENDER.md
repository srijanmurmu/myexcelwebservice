# Quick Deploy to Render (Free)

## Step-by-Step Guide

### 1. Prepare Your Code

First, push your code to GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - User Management API"

# Create a new repository on GitHub (github.com/new)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Sign Up for Render

1. Go to **https://render.com**
2. Click **"Get Started for Free"**
3. Sign up with GitHub (easiest option)

### 3. Create New Web Service

1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect account"** if not already connected
4. Find and select your repository
5. Click **"Connect"**

### 4. Configure Your Service

Fill in these settings:

- **Name**: `user-management-api` (or your preferred name)
- **Region**: Choose closest to you
- **Branch**: `main`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free`

### 5. Deploy

1. Click **"Create Web Service"**
2. Wait 2-3 minutes while Render:
   - Clones your repository
   - Installs dependencies
   - Starts your server
3. Once you see "Live" status, your API is deployed! 🎉

### 6. Get Your URL

Your API will be available at:
```
https://your-service-name.onrender.com
```

### 7. Test Your API

Open in browser:
```
https://your-service-name.onrender.com
```

Or use curl:
```bash
curl https://your-service-name.onrender.com/api/users
```

## Important Notes

### Free Tier Limitations
- Service spins down after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- 750 hours/month free (enough for hobby projects)

### Keep It Awake (Optional)
If you want to prevent sleeping, use a service like:
- **UptimeRobot** (free): Pings your API every 5 minutes
- **Cron-job.org** (free): Scheduled requests

### Auto-Deploy
Render automatically redeploys when you push to GitHub! Just:
```bash
git add .
git commit -m "Update API"
git push
```

## Troubleshooting

### Build Failed?
- Check Build Logs in Render dashboard
- Ensure `package.json` has correct start script
- Verify Node version compatibility

### API Not Responding?
- Check if service is "Live" in Render dashboard
- First request after sleep takes time - wait 30 seconds
- Check Logs tab for errors

### Need to Update?
Just push to GitHub:
```bash
git add .
git commit -m "Your update message"
git push
```
Render auto-deploys in 1-2 minutes.

## Alternative: Deploy Without GitHub

If you don't want to use GitHub:

1. In Render, select **"Deploy from public Git repository"**
2. Enter any public Git URL
3. Or create a GitHub repo temporarily just for deployment

## Your API is Live! 🚀

Example endpoints:
- `GET /` - API information
- `GET /api/users` - All users
- `GET /api/users/:id` - Specific user
- `GET /api/users/search?name=John` - Search
- `GET /api/stats` - Statistics

Enjoy your free cloud-hosted API!
