/*
  MenuItem

  This is a stripped down version of an actual type. Here is a lot 
  missing, like type guards and a constructor. It just limits
  to the actual type definition and backend/api mapper.
*/

export interface MenuItem {
  slug: string
  title: string
  url: string
}

export const fromApi = (data: any): MenuItem | undefined =>
  (typeof data?.url === 'string' &&
  typeof data?.slug === 'string' &&
  typeof data?.title === 'string')
    ? ({ slug: data.slug, title: data.title, url: data.url })
    : undefined

