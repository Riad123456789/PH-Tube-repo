const handleCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");

    data.data.forEach((Categories) => {

        const div = document.createElement('div');
        div.innerHTML = `
            <a  onclick="handleLoadVideos('${Categories.category_id}')" class= "tab btn btn-sm tab-lifted">${Categories.category}</a> 
    `
        tabContainer.appendChild(div);
    });
};



const handleLoadVideos = async (Id) => {

    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${Id}`)
    const data = await response.json();

    const alldata = document.getElementById("all-data");
    alldata.innerHTML = "";

    data.data.forEach((videos) => {



        const div = document.createElement('div');


        div.innerHTML = `
           <div class="border w-60 bg-base-100  ">
        <img class="h-36 w-60 rounded-md" src=${videos.thumbnail} alt="Shoes" />
         <div class="card-body">
            <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
            </div>
         </div>
        </div>

          `


        alldata.appendChild(div);

    });

};


handleCategories();
handleLoadVideos("1000");