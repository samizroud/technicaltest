
export class User  {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  constructor(user: any) {
      
        {
        this.login = user.login||null,
        this.id  = user.id||null,
        this.node_id  = user.node_id||null,
        this.avatar_url  = user.avatar_url||null,
        this.gravatar_id  = user.gravatar_id||null,
        this.url = user.url||null,
        this.html_url  = user.html_url||null,
        this.followers_url  = user.followers_url||null,
        this.following_url  = user.following_url||null,
        this.gists_url  = user.gists_url||null,
        this.starred_url = user.starred_url||null,
        this.subscriptions_url = user.subscriptions_url||null,
        this.organizations_url  = user.organizations_url||null,
        this.repos_url  = user.repos_url||null,
        this.events_url = user.events_url||null,
        this.received_events_url  = user.received_events_url||null,
        this.type  = user.type||null,
        this.site_admin = user.site_admin||null
        this.name = user.name || null,
        this.company = user.company || null,
        this.blog = user.blog || null,
        this.location = user.location || null,
        this.email = user.email || null,
        this.hireable = user.hireable || null,
        this.bio = user.bio || null,
        this.twitter_username = user.twitter_username || null,
        this.public_repos = user.public_repos || null,
        this.public_gists = user.public_gists || null,
        this.followers = user.followers || null,
        this.following = user.following || null,
        this.created_at = user.created_at || null,
        this.updated_at = user.updated_at || null
    }
  }

  
}