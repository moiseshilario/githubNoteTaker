const API = {
  getBio: (username) => {
    username = username.toLowerCase().trim()
    let url = `https://api.github.com/users/${username}`
    return fetch(url).then((res) => res.json())
  },
  getRepos: (username) => {
    let url = `https://api.github.com/users/${username}/repos`
    return fetch(url).then((res) => res.json())
  },
  getNotes: (username) => {
    let url = `https://github-saver-61205.firebaseio.com/${username}.json`
    return fetch(url).then((res) => res.json())
  },
  addNote: (username, note) => {
    let url = `https://github-saver-61205.firebaseio.com/${username}.json`
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json())
  },
  deleteNote: (username, noteKey) => {
    let url = `https://github-saver-61205.firebaseio.com/${username}/${noteKey}.json`
    return fetch(url, {
      method: 'delete'
    }).then((res) => res.json())
  },
  updateNote: (username, noteKey, noteText) => {
    let url = `https://github-saver-61205.firebaseio.com/${username}/${noteKey}.json`
    return fetch(url, {
      method: 'put',
      body: JSON.stringify(noteText)
    })
  }
}

export default API
