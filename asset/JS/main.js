// Density : tỉ trọng
// substance : chất
// rest : phần còn lại
// Use the Rest Parameter with Function Parameters ==== ...args
// const spreaded = ...arr; ==== Toán tử lây lan != rest parameter
// iterable : có thể lặp lại
// console.clear() : xoá hết 

// xử lý bất đồng bộ , thay thế cho call helk , xuất hiện trong es6
// resolve xử lý khi thành công ngược lại reject xảy ra khi có lỗi 
// có ba trạng thái pedding , fullfilt, reject
// promise đơn giản là giá trị trả về phải phụ thuộc vào giá trị đâu tiên
// CRUD 
// - Create : Tạo mới
// - Read: Lấy dữ liệu
// - Update : Chỉnh Sửa
// - Delete : Xoá

var valueInput = document.querySelector('.weather__search');
var weather__City = document.querySelector('.weather__city');
var weather__Country = document.querySelector('.weather__country');
var weather__time = document.querySelector('.weather__time');
var weather__temp = document.querySelector('.weather__temperature');
var weather__humidity = document.querySelector('.humidity-content');
var weather__sun = document.querySelector('.sun-content');
var container = document.querySelector('.container');
var content = document.querySelector('.content');

function getweatherUI(){
    let value = valueInput.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=0ff39b48a49a8873678923ce9a01bc0b`;

    let data = fetch(url)
            .then(function(responsive){
            return responsive.json();
        })
            .then(function(weatherData){
            if(weatherData.cod == 200){
                
                weather__City.innerText = weatherData.name;
                weather__Country.innerText = weatherData.sys.country;
                var temp = Math.round((weatherData.main.temp - 273.15));
                weather__temp.innerHTML = temp + '<i class="ri-celsius-line"></i>';
                weather__humidity.innerText = weatherData.main.humidity + '%';
                weather__sun.innerText = weatherData.clouds.all;
                weather__time.innerText = new Date().toLocaleString('vn');
                console.log(weather__time);
                console.log(weatherData);
                if(temp > 28){
                    container.setAttribute('class',' container sun');
                }

                if(temp>24 && temp < 28){
                    container.setAttribute('class',' container cool');
                }

                if(temp < 20){
                    container.setAttribute('class',' container cold');
                }
            } 
        })
}
valueInput.addEventListener('keypress',function(e){
      if(e.key == 'Enter'){
        getweatherUI();
        valueInput.value = '';
      }
})

var courseApi = 'http://localhost:3000/couser';

    fetch(courseApi)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })