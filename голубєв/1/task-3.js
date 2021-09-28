const images = [
    "https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg",
    "https://media.istockphoto.com/photos/cute-jack-russell-dog-portrait-looking-up-on-a-blue-background-in-a-picture-id1287016066?s=612x612",
    "https://media.istockphoto.com/photos/portrait-of-a-nova-scotia-duck-tolling-retriever-looking-at-camera-on-picture-id1273382787?s=612x612",
];

const ol = document.createElement("ol");

images.forEach((image) => {
    const li = document.createElement("li");
    const imageTag = document.createElement("img");
    imageTag.src = image;
    li.appendChild(imageTag);
    ol.appendChild(li);
});

document.body.appendChild(ol);