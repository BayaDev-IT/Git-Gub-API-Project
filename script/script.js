const API = 'https://api.github.com/users/'

const form = document.querySelector('form')
const input = document.querySelector('#inp')
const output = document.querySelector('#output')

const searchUser = async () => {
    let url = API + input.value
    const req = await fetch(url)
    const res = await req.json()
    renderUser(res)
    input.value = ''
    // console.log(res)
}

const renderUser = (data) => {
    output.innerHTML = ''
        const card = document.createElement('div')
        card.classList.add('card')
        const block1 = document.createElement('div')
        block1.classList.add('block1')
        const block2 = document.createElement('div')
        block2.classList.add('block2')
        const block3 = document.createElement('div')
        block3.classList.add('block3')
        const block3_item = document.createElement('div')
        const linkImage = document.createElement('a')
        linkImage.href = data.html_url
        linkImage.target = "_blank"
        const linkName = document.createElement('a')
        linkName.target = "_blank"
        linkName.href = data.html_url
        const img = document.createElement('img')
        img.src = data.avatar_url
        img.alt = 'Icon'
        const title = document.createElement('h3')
        title.textContent = `User login: ${data.login}`
        const bioUser = document.createElement('p')
        bioUser.textContent = `User bio: ${data.bio}`
        const blogUser = document.createElement('p')
        blogUser.textContent = `User blog: ${data.blog}`
        const companyUser = document.createElement('p')
        companyUser.textContent = `User company: ${data.company}`
        const emailUser = document.createElement('a')
        emailUser.textContent = `User email: ${data.email}`
        emailUser.href = `mailto: ${data.email}`
        emailUser.target = "_blank"
        const userFollowers = document.createElement('a')
        userFollowers.textContent = `User followers: ${data.followers}`
        userFollowers.href = data.followers_url
        userFollowers.target = "_blank"
        const userFollowing = document.createElement('a')
        userFollowing.textContent = `User following: ${data.following}`
        userFollowing.href = data.following_url
        userFollowing.target = "_blank"
        const userHireable = document.createElement('p')
        userHireable.textContent = `User hireable: ${data.hireable}`
        const userID = document.createElement('p')
        userID.textContent = `User ID: ${data.id}`
        const userLoaction = document.createElement('p')
        userLoaction.textContent = `User location: ${data.location}`
        const userLogin = document.createElement('a')
        userLogin.textContent = `User Login: ${data.login}`
        userLogin.href = data.html_url
        userLogin.target = "_blank"
        const userName = document.createElement('p')
        userName.textContent = `User name: ${data.name}`
        const userNodeID = document.createElement('p')
        userNodeID.textContent = `User Node ID: ${data.node_id}`
        const userPublicGists = document.createElement('p')
        userPublicGists.textContent = `User public gists: ${data.public_gists}`
        const userRepositories = document.createElement('a')
        userRepositories.textContent = `User public repositories: ${data.public_repos}`
        userRepositories.href = data.repos_url
        userRepositories.target = "_blank"
        const userIsSiteAdmin = document.createElement('p')
        userIsSiteAdmin.textContent = `User admin: ${data.site_admin}`
        const userSubscriptions = document.createElement('a')
        userSubscriptions.textContent = 'Sunscriptions'
        userSubscriptions.target = "_blank"
        userSubscriptions.href = `User subscriptions: ${data.subscriptions_url}`
        const userTwitter = document.createElement('a')
        userTwitter.textContent = `Twitter username: ${data.twitter_username}`
        userTwitter.href = data.twitter_username
        userTwitter.target = "_blank"
        const userType = document.createElement('p')
        userType.textContent = `User type: ${data.type}`
        const userUpdatedAt = document.createElement('p')
        userUpdatedAt.textContent = `User updated at: ${data.updated_at}`
        const userCreatedAt = document.createElement('p')
        userCreatedAt.textContent = `User created at: ${data.created_at}`
    
        
        linkImage.append(img)
        linkName.append(title)
        block1.append(linkImage, linkName, bioUser, blogUser, emailUser, companyUser, userFollowers, userFollowing, userHireable, userID, userLoaction)
        block2.append(userLogin, userName, userNodeID, userPublicGists)
        block3_item.append(userIsSiteAdmin, userSubscriptions, userTwitter, userType, userUpdatedAt, userCreatedAt)
        block3.append(userRepositories, block3_item)
        card.append(block2, block3)
        output.append(block1, card)
}

// const renderUser = (data) => {
//     output.innerHTML = '';
//     const card = document.createElement('div');
//     card.classList.add('card');

//     for (let key in data) {
//         const value = data[key] !== null ? data[key] : 'No information available';
//         const paragraph = document.createElement('p');
//         paragraph.textContent = `${key}: ${value}`;
//         card.appendChild(paragraph);
//     }

//     output.appendChild(card);
// };

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchUser()
})