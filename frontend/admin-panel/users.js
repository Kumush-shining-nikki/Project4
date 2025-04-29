
  const selectAll = document.getElementById('selectAll');
  const checkbox = document.querySelectorAll('.checkbox');
  
  selectAll.addEventListener('change', function () {
    checkbox.forEach(checkbox => {
      checkbox.checked = selectAll.checked;
    });
  });
  
  
    // Qidiruv funksiyasi
    const searchInput = document.querySelector('.search-input input');
    const tableRows = document.querySelectorAll('table tbody tr');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        tableRows.forEach(row => {
            const nameCell = row.querySelector('.author-name').textContent.toLowerCase();
            const emailCell = row.querySelector('.author-email').textContent.toLowerCase();
            
            if (nameCell.includes(searchTerm) || emailCell.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // "Select All" checkboxni boshqarish
    const selectAllCheckbox = document.getElementById('selectAll');
    const individualCheckboxes = document.querySelectorAll('.checkbox');

    selectAllCheckbox.addEventListener('change', function() {
        individualCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    // Har bir delete tugmasi uchun tasdiqlash va o'chirish
    function confirmDelete(button) {
        const confirmation = confirm("Are you sure you want to delete this item?");
        
        if (confirmation) {
            const row = button.closest('tr'); // Eng yaqin tr elementini topib o'chiradi
            row.remove();
        }
    }

    // Delete tugmasini dinamik tarzda qo'shish
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            confirmDelete(button);
        });
    });


    const modalOverlay = document.getElementById("modalOverlay");
    const closeBtn = document.getElementById("closeBtn");
    const saveBtn = document.getElementById("saveBtn");
  
    const inputName = document.getElementById("inputName");
    const inputEmail = document.getElementById("inputEmail");
    const inputPhone = document.getElementById("inputPhone");
    const inputOrders = document.getElementById("inputOrders");
    const inputLogin = document.getElementById("inputLogin");
  
    // Edit button click handler
    function editUser(button) {
      const row = button.closest("tr");
      const name = row.querySelector(".author-name").textContent.trim();
      const email = row.querySelector(".author-email").textContent.trim();
      const phone = row.querySelector(".phone") ? row.querySelector(".phone").value : row.cells[3].textContent.trim();
      const role = row.querySelector(".status").textContent.trim();
      const login = row.querySelector(".last-login") ? row.querySelector(".last-login").value : row.cells[5].textContent.trim();
  
      inputName.value = name;
      inputEmail.value = email;
      inputPhone.value = phone;
      inputOrders.value = role;
      inputLogin.value = login;
  
      modalOverlay.style.display = "block";
    }
  
    // Close modal
    closeBtn.onclick = () => {
      modalOverlay.style.display = "none";
    };
  
    // Save changes (You can replace this with real saving logic)
    saveBtn.onclick = () => {
      alert("Ma'lumotlar saqlandi (yoki serverga jo‘natiladi)");
      modalOverlay.style.display = "none";
    };
  
    // Optional: Close modal on outside click
    window.onclick = (e) => {
      if (e.target == modalOverlay) {
        modalOverlay.style.display = "none";
      }
    };
  