const GITHUB_USER = "farhankabir1639";

export interface GitHubStats {
  repos: number;
  stars: number;
  contributions?: number;
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return { repos: 0, stars: 0 };
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const stars = repos.reduce((sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count, 0);

    return {
      repos: user.public_repos ?? 0,
      stars,
    };
  } catch {
    return { repos: 0, stars: 0 };
  }
}
