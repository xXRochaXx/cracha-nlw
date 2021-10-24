const LinksSocialMedia = {
  github: 'xXRochaXx',
  youtube: 'jakelinygracielly',
  facebook: 'lucas.rocha1',
  instagram: 'eorochasouza',
  twitter: 'RochaaaS7'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}
getGitHubProfileInfos()
