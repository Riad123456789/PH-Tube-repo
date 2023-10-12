const handleCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");

    data.data.forEach((Categories) => {

        const div = document.createElement('div');
        div.innerHTML = `
            <a  onclick="handleLoadVideos('${Categories.category_id}')" class= "tab btn btn-sm bg-slate-200 tab-lifted">${Categories.category}</a> 
    `
        tabContainer.appendChild(div);
    });
};


const handleLoadVideos = async (Id) => {

    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${Id}`)
    const data = await response.json();
    const alldata = document.getElementById("all-data");
    alldata.innerHTML = "";

    if (data.data.length == 0) {
        const div = document.createElement('div');
        div.innerHTML = ` 
      
       <div class="border"> 
         <img class="pl-9" src="./images/Icon.png"/> 
         <p class="text-xl font-semibold">PH Tube
           Oops!! Sorry, There is no content here
         </p>
       
       </div>
    
        `
        alldata.appendChild(div);
    } else {

        data.data.forEach((videos) => {

            function showTime(sec) {

                let hours = sec / 3600;
                let hrss = parseInt(hours)
                let string1 = String(hrss)
                const hrs = string1.slice(0, 1)

                let minutes = hrs * 60;
                let mint = parseInt(minutes)
                let string = String(mint)
                const min = string.slice(0, 2)

                return `<div class="bg-black text-white text-xs w-24 p-[3px] rounded-sm absolute top-32 right-2">${hrs} hrs ${min} min ago </div>`
            }


            const div = document.createElement('div');
            div.innerHTML = `
          <div class=" w-60 bg-base-100 relative ">
                 <img class="h-40 w-72 rounded-md" src=${videos.thumbnail} alt="" />
              <div class="">
                    <div class="flex  items-center p-4 gap-2">
                   <div class="w-10 ">
                      <img class="rounded-full" src=${videos.authors[0].profile_picture} />
                   </div>
                    <p class="text-sm font-bold">${videos.title}</p>
                 </div>
             </div>
    
                  <div class="flex items-center gap-2">
                  <P class="text-slate-600 pl-7"> ${videos.authors[0].profile_name}</p>
                  <img class=""  ${videos.authors[0].verified ? 'src="./images/fi_10629607.svg' : ""} " </img>
                  </div>
    
                   <p class="pl-7">${videos.others.views} views</p>
                   <p class=" text-white text-xs">${videos.others.posted_date ? showTime(videos.others.posted_date) : ""}</p>
                     
          </div>
    
              `
            alldata.appendChild(div);

        });
    }

}; 


handleCategories();
handleLoadVideos("1000");