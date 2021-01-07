class Storage {
  get(key: string) {
    return localStorage.getItem(key)
  }

  getObject(key: string): object {
    try {
      return JSON.parse(this.get(key) || '')
    } catch {
      return {}
    }
  }

  getArray(key: string): any {
    try {
      const resp = JSON.parse(this.get(key) || '')
      if (Array.isArray(resp)) {
        return resp
      } else {
        return []
      }
    } catch {
      return []
    }
  }

  set(key: string, value: string | number | object) {
    let payload: any

    if (typeof value === 'object') {
      payload = JSON.stringify(value)
    } else if (typeof value === 'number') {
      payload = Number(value)
    } else {
      payload = value
    }

    localStorage.setItem(key, payload)
  }
}

const storage = new Storage()
export default storage
