const $uploadInput = document.querySelector('#uploadInput')

$uploadInput.onchange = e => {
    const file = e.target.files[0]
    console.log(file)
    uploadFile(file)
}

// 上传文件到服务器
function uploadFile(file) {}