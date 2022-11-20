// variabel mengambil selector pada css dengan document.querySelector()
let burger = document.querySelector(".burger input");
let navbar = document.querySelector('.navbar ul');
// next

// saat burger menu di click akan menjalankan anmasi menu burger
burger.addEventListener('click', function () {
    navbar.classList.toggle('slide');
});

// saat burger menu di click akan menjalankan fungsi akan mengambil
// classList .burger.lalu kita toggle(fungsi dari toggle di js seperti 
// halnya saklar on of jadi saat tidak ada class slide akan 
// ditambahkan kalau tidak akan dihilangkan