// const delete_btn = document.getElementById('delete')


document.querySelectorAll('#delete').forEach(button => {
    button.addEventListener('click', function() {
        let id = button.value
        
        fetch(`http://localhost:3000/task/${id.trim()}` , {
            method: 'DELETE', // Phương thức POST
            headers: {
                'Content-Type': 'application/json', // Đặt loại nội dung là JSON
            },
        })
        .then(response => {
            
            window.location.href = 'http://localhost:3000/task/'; // Chuyển hướngn
          })
        .then(data => {
            console.log('Success:', data);
            // Xử lý dữ liệu nhận được từ API
        })
        .catch(error => {
            console.error('Error:', error);
            // Xử lý lỗi
        });

    
    });

  
});



document.querySelectorAll('#update').forEach(button => {
    button.addEventListener('click', function() {
        let id = button.value
    
        let completed = button.innerText == 'Done' ? true : false;
        console.log(completed)
        var data = {}
        if(completed) {
                data = {
                    completed : false,
                }
        } 
        else {
            data = {
                completed : true,
            }
        }
        fetch(`http://localhost:3000/task/${id.trim()}` , {
            method: 'PATCH', // Phương thức POST
            headers: {
                'Content-Type': 'application/json', // Đặt loại nội dung là JSON
            },
            body: JSON.stringify(data)

        })
        .then(response => {
            
            window.location.href = 'http://localhost:3000/task/'; // Chuyển hướngn
          })
        .then(data => {
            console.log('Success:', data);
            // Xử lý dữ liệu nhận được từ API
        })
        .catch(error => {
            console.error('Error:', error);
            // Xử lý lỗi
        });

    
    });

  
});


