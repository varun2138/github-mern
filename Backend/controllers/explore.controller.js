const exploreRepos = async (req, res) => {
  const { language } = req.params;
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          authorization: `token  ${process.env.GITHUB_API_KEY} `,
        },
      }
    );
    const data = await response.json();
    return res.status(200).json({ data: data.items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export { exploreRepos };