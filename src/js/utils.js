export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }


export function formatDate(date){
    return new Date(date).toLocaleDateString('en-US',{
        timeZone:"UTC",
    });
}

export function filterTags (posts, {
    filterTags = true,
    limit = undefined,

    
} = {} ) {
const filterTheTags = posts.reduce((acc, post ) => {
    const { tags } = post.frontmatter;

    if(filterTags) return acc;

    acc.push(post)

    return acc;
}, [] )

}


