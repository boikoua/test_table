interface OpenGraphProperties {
  title: string | null;
  type: string | null;
  url: string | null;
  locale: string | null;
  image: string | null;
}

export interface Iitem {
  AMPContent: string;
  Author: number;
  Author_Name: string;
  Author_Url: string;
  CanonicalLink: string;
  Category: string;
  Country: string;
  CreatedByMemberId: string;
  Description: string;
  DisableForSiteSearch: boolean;
  EnableAMP: boolean;
  Enabled: boolean;
  ExpiryDate: string;
  ExternalId: number;
  Id: number;
  Image: string;
  ItemCategories: any[];
  ItemCategoryIdList: number[];
  ItemTags: any[];
  Item_Rating: number;
  MetaDescription: string;
  MetaTitle: string;
  Module_Alias: string;
  Module_ID: number;
  Name: string;
  OpenGraphProperties: OpenGraphProperties;
  Params: Record<string, any>;
  ParentId: number;
  ParentId_List: number[];
  ParentName: string;
  ParentUrl: string;
  ProductPrice: number;
  ReleaseDate: string;
  SEOTitle: string;
  SeoPriority: number;
  ShowPageForSearchEngine: boolean;
  SiteSearchKeywords: string[];
  SocialMetaTags: string;
  Status: string;
  TemplateName: string;
  Url: string;
  UrlSlug: string;
  Url_List: string[];
  Weighting: number;
}
