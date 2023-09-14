const $uploadDiv = document.querySelector('#uploadDiv')
const $uploadInput = document.querySelector('#uploadInput')

// 点击 $uploadDiv 时，触发 $uploadInput 的点击事件
// 这样就可以触发文件选择对话框
$uploadDiv.onclick = e => {
    $uploadInput.click()
}

// 鼠标拖拽着文件进入 $uploadDiv 区域时，添加高亮效果
$uploadDiv.ondragenter = e => {
    e.preventDefault()
    $uploadDiv.classList.add('drag-over')
}

// 鼠标拖拽着文件离开 $uploadDiv 区域时，去掉高亮效果
$uploadDiv.ondragleave = e => {
    e.preventDefault()
    $uploadDiv.classList.remove('drag-over')
}

// 鼠标拖拽着文件在 $uploadDiv 区域时，此事件会连续触发，需要阻止默认行为
$uploadDiv.ondragover = e => {
    e.preventDefault()
}

// 鼠标拖拽着文件在 $uploadDiv 区域松手时触发
$uploadDiv.ondrop = e => {
    e.preventDefault()
    $uploadDiv.classList.remove('drag-over')
    // 获取拖拽的文件
    console.log(e.dataTransfer.files)
    const file = e.dataTransfer.files[0]
    // 检测文件的类型，只允许上传图片
    if (file.type.indexOf('image') === -1) {
        return
    }
    // 只允许上传10M以下的文件
    if (file.size > 10 * 1024 * 1024) {
        return
    }
    uploadFile(file)
}

$uploadInput.onchange = e => {
    const file = e.target.files[0]
    console.log(file)
    uploadFile(file)
}

// 上传文件到服务器
function uploadFile(file) {}