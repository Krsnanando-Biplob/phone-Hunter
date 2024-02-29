console.log('locked')

const loadedPhone= async (searchTaxt ='a', isShowAll)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTaxt}`)
  const data = await res.json();
  const phones =data.data;
  displayPhone(phones, isShowAll)
}

const displayPhone= (phones, isShowAll) =>{
  const phoneConainar =document.getElementById('phone-container')
  phoneConainar.textContent=''
  const ShowAll= document.getElementById('shoAll')
  if(phones.length>6 && !isShowAll){
    ShowAll.classList.remove('hidden')
  } else(
    ShowAll.classList.add('hidden')
  )
  if(!isShowAll){
    phones= phones.slice(0, 6)
  }
  // console.log(phones)
  phones.forEach(phone=> {
    // console.log(phone)
    const phoneCard= document.createElement('div')
    phoneCard.classList= `card w-80 lg:w-96 p-4 mx-auto bg-base-100 shadow-xl`
    phoneCard.innerHTML=`
    <figure><img class="rounded-lg" src ="${phone.image}" /></figure>
          <div class="card-body">
            <h2 class="card-title"> ${phone.phone_name} </h2>
            <span class="card-title"> ${phone.brand} </span
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <span class=" text-xl text-center font-bold">$ 999</span>
            <div class="card-actions justify-center">
              <button onclick="shoditls('${phone.slug}')" class="btn btn-primary shadow-md">Show Details</button>
            </div>
          </div>
    `
    phoneConainar.appendChild(phoneCard)
  })

  loddingSipnner(false)

}

// scarch btn
loadedPhone('a')

loadedPhone()
const seacrhBtn= (isShowAll)=>{
  loddingSipnner(true)
  const inputSearch= document.getElementById('input-fild')
  const inputText= inputSearch.value;
  // console.log(inputText)
  loadedPhone(inputText, isShowAll)
  // inputSearch.value = '';

}


const loddingSipnner= (isLoading)=>{
  const lodder= document.getElementById('lodder')
  if(isLoading){
    lodder.classList.remove('hidden')
  }
  else{
    lodder.classList.add('hidden')
  }
}
const shoditls= async(id)=>{
  // console.log( id)
  const res = await fetch (`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json()
  // console.log(data)
  const phone= data.data
  show(phone)
  console.log(phone)

}
const show =(phone)=>{
  console.log(phone)
  const phoneName=document.getElementById('phone-name')
  phoneName.innerText= phone.name;
  const mdam =document.getElementById('show-ditiles-mdam');
  mdam.innerHTML=`
    <img src=" ${phone.image}" alt=""/>
    <p class=" font-bold "> <span class=" font-bold ">Brand: </span>${phone.brand}</p>

  `

  const brand=document.getElementById('phoneBrand');
  brand.innerHTML=`
    <p>${phone.slug}</p>
    <p>${phone.mainFeatures.displaySize}</p>
    <p>${phone.mainFeatures.memory}</p>
    <p>${phone.releaseDate}</p>
  `
  my_modal_5.showModal()
}

const showall= ()=>{
  seacrhBtn(true)
}

