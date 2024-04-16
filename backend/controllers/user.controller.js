import User from "../models/user.model.js";

export const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;
  try {
    // 60 requests per hour for unauthenticated requests
    // 5000 requests per hour for authenticated requests
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const userProfile = await userRes.json();

    const repoRes = await fetch(userProfile.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repos = await repoRes.json();

    res.status(200).json({ userProfile, repos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getContributorsAndContributions = async (req, res) => {
  const { owner, repo } = req.params;
  try {
    // Fetch repository data
    const repositoryUrl = `https://api.github.com/repos/${owner}/${repo}`;
    const repositoryRes = await fetch(repositoryUrl);
    if (!repositoryRes.ok) {
      throw new Error("Failed to fetch repository data.");
    }

    const repositoryData = await repositoryRes.json();
    // console.log(repositoryData);
    // Extract contributors URL
    const contributorsUrl = repositoryData.contributors_url;

    // Fetch contributors
    const contributorsRes = await fetch(contributorsUrl, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    if (!contributorsRes.ok) {
      throw new Error("Failed to fetch contributors.");
    }

    const contributors = await contributorsRes.json();

    res.status(200).json({ contributors });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
