# User Management API

A REST API built with Node.js and Express to manage user data from Excel.

## Features

- Get all users
- Search users by name, department, email, or user type
- Get user by ID
- View statistics

## API Endpoints

### Base URL
`http://localhost:3000` (local)

### Endpoints

#### 1. Get API Info
```
GET /
```

#### 2. Get All Users
```
GET /api/users
```

#### 3. Get User by ID
```
GET /api/users/:id
```
Example: `GET /api/users/10901976`

#### 4. Search Users
```
GET /api/users/search?name=John&department=IT
```
Query parameters:
- `name` - Search by first/last/display name
- `department` - Filter by department
- `email` - Search by email
- `userType` - Filter by user type

#### 5. Get Statistics
```
GET /api/stats
```

#### 6. Health Check
```
GET /health
```

## Local Development

### Prerequisites
- Node.js 18+ installed

### Setup
```bash
npm install
npm start
```

The server will run on `http://localhost:3000`

For development with auto-reload:
```bash
npm run dev
```

## Free Deployment Options

### Option 1: Render (Recommended - Easiest)

1. **Create account**: Go to [render.com](https://render.com) and sign up
2. **Create new Web Service**: Click "New +" → "Web Service"
3. **Connect GitHub**: 
   - Push your code to GitHub first
   - Or use "Public Git repository" and paste your repo URL
4. **Configure**:
   - Name: `user-management-api`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: Free
5. **Deploy**: Click "Create Web Service"

**Pros**: 
- Simple setup
- Auto-deploys from Git
- Free tier includes 750 hours/month
- Gets HTTPS automatically

**Cons**: 
- Spins down after inactivity (takes 30s to wake up)

### Option 2: Railway

1. **Create account**: Go to [railway.app](https://railway.app)
2. **New Project**: Click "New Project" → "Deploy from GitHub repo"
3. **Connect repo**: Authorize and select your repository
4. **Auto-deploy**: Railway detects Node.js and deploys automatically
5. **Get URL**: Click on your deployment to get the public URL

**Pros**: 
- Very simple
- $5 free credit monthly
- Fast deployments

**Cons**: 
- Free tier has usage limits

### Option 3: Cyclic.sh

1. **Sign up**: Go to [cyclic.sh](https://cyclic.sh)
2. **Connect GitHub**: Link your GitHub account
3. **Deploy**: Select repository and click deploy
4. **Done**: Get instant URL

**Pros**: 
- Completely free
- No credit card needed
- Stays active

### Option 4: Vercel (with modifications)

Vercel is serverless, so requires slight code modification:

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Create vercel.json**:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```
3. **Deploy**: Run `vercel` in terminal

**Pros**: 
- Fast edge network
- Generous free tier

**Cons**: 
- Serverless (functions timeout after 10s on free tier)

### Option 5: Glitch

1. **Go to**: [glitch.com](https://glitch.com)
2. **New Project**: Click "New Project" → "Import from GitHub"
3. **Paste repo URL**: Enter your GitHub repository
4. **Auto-deploy**: Glitch builds and runs automatically

**Pros**: 
- Code editor in browser
- Always on (mostly)
- Free

**Cons**: 
- Project sleeps after 5 min inactivity

## Recommended: Render

For this API, I recommend **Render** because:
- Completely free (no credit card needed)
- Easy GitHub integration
- Automatic HTTPS
- Simple to set up
- Good for APIs

## Deployment Steps for Render

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [render.com](https://render.com) and sign up

3. Click "New +" → "Web Service"

4. Connect your GitHub repository

5. Configure:
   - **Name**: user-management-api
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

6. Click "Create Web Service"

7. Wait 2-3 minutes for deployment

8. Your API will be live at: `https://your-service-name.onrender.com`

## Testing Your Deployed API

Once deployed, test with:
```bash
curl https://your-service-name.onrender.com/api/users
```

Or visit in browser: `https://your-service-name.onrender.com`

## Notes

- The free tier on Render spins down after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- For production use, consider paid tier for always-on service
