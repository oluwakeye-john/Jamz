export const getPublicId = (url: string) => {
  if (url) {
    if (!url.includes('https://res.cloudinary.com')) {
      // if its not a cloudinary image
      return url
    }
    // extract public id from url
    const split = url.split('/')
    const newUrl = split[split.length - 1]
    return newUrl
  } else {
    return ''
  }
}
