import * as MenuItem from '../Data/MenuItem'
import { isNil } from '../Library/Utils'


const MockData: { [key: string]: unknown } = {
  '/api/v1/menu': [
    {
      "children": [
        {
          "slug":"live-events",
          "title":"Live Event",
          "url":"https://www.we-conect.com/liveevents",
        },
        {
          "slug": "digital-managed-events ",
          "title": "Digital Managed Events ",
          "url": "https://www.we-conect.com/digital-managed-events",
        } 
      ]
    },
    {
      "slug ": "google",
      "title": "Google",
      "url": "https://www.google.de",
    }
  ]
}


const get = (path: string): Promise<unknown> =>
  Promise.resolve<unknown>(MockData[path])


export const getMenus = (): Promise<MenuItem.MenuItem[]> =>
    get("/api/v1/menu")
      .then(
        // Parse out the menu and drop trash data.
        (data: unknown): any[] => 
          Array.isArray(data)
            ? data.reduce((acc, value) => {
                if (Array.isArray(value?.children)) {
                  return acc.concat(value.children)
                }
                return acc
              }, [])
            : []
      )
      .then((data: any[]): MenuItem.MenuItem[] =>
        data
          .map(MenuItem.fromApi)
          .filter((elem): elem is MenuItem.MenuItem => !isNil(elem))
      )
