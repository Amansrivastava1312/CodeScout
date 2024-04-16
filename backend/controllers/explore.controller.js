export const explorePopularRepos = async (req, res) => {
  const { language } = req.params;

  try {
    // 5000 requests per hour for authenticated requests
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const data = await response.json();

    res.status(200).json({ repos: data.items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const exploreSimilarUsers = async (req, res) => {
  const { user } = req.params;

  try {
    //5000 requests for authenticated requests
    const response = await fetch(
      `https://api.github.com/search/users?q=${user}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const data = await response.json();

    res.status(200).json({ users: data.items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getContributorsAndContributions = async (req, res) => {
  const { owner , repo } = req.params;
  try {
      // Fetch repository data
      const repositoryUrl = `https://api.github.com/repos/${owner}/${repo}`;
      const repositoryRes = await fetch(repositoryUrl);
      if (!repositoryRes.ok) {
          throw new Error('Failed to fetch repository data.');
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
          throw new Error('Failed to fetch contributors.');
      }

      const contributors = await contributorsRes.json();

      res.status(200).json({ contributors });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};