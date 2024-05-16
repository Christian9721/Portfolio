// similer products
const similerItems = (currentItem: any, allItems: any, slug: string) => {
  let categories: string[] = [];
  let tags: string[] = [];
  let projects: string[] = [];

  // set categories
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }

  // set tags
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  // set projects
  if (currentItem.data.projects.length > 0) {
    projects = currentItem.data.projects;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) => item.data.categories.includes(category)),
  );

  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item.data.tags.includes(tag)),
  );

  // filter by projects
  const filterByProjects = allItems.filter((item: any) =>
    tags.find((project) => item.data.projects.includes(project)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;
