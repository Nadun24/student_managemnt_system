getUsers()

$('#submitBtn').click(function () {
  add_user()
})

$('#updateBtn').click(function () {
  updateUser()
})

//=======================================================
$(document).on('click', '.delete-user', function () {
  let userId = $(this).data('id')

  var data = { action: 'deleteUser', id: userId }

  if (confirm('Are you sure you want to delete this user?')) {
    $.post('models/dashboard_model.php', data, function (res) {
      if (res == '1') {
        Swal.fire({
          title: 'User deleted successfully'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error deleting user',
          footer: ''
        })
      }
      clear_form()
    })
  }
})

//=======================================================
$(document).on('click', '.update-user', function () {
  let userId = $(this).data('id')
  hideSubmitBtn()
  var data = {
    action: 'getUserById',
    id: userId
  }

  $.post('models/dashboard_model.php', data, function (res) {
    let user = JSON.parse(res)
    // console.log(user)
    $('#name').val(user[0].name)
    $('#email').val(user[0].email)
    $('#contact').val(user[0].contact_number)
    $('#address').val(user[0].address)
    $('#userId').val(user[0].id)
  })
})

//=======================================================

function add_user () {
  var name = $('#name').val()
  var email = $('#email').val()
  var contact_number = $('#contact').val()
  var address = $('#address').val()

  var data = {
    action: 'addUser',
    name: name,
    email: email,
    contact_number: contact_number,
    address: address
  }
  $.post('models/dashboard_model.php', data, function (response) {
    if (response == 1) {
      // alert('User added successfully')
      Swal.fire({
        title: 'User added successfully',
        icon: 'success',
        draggable: true
      })
      clear_form()
    } else {
      //   alert('Error adding user')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error adding user',
        footer: ''
      })
    }
  })
}

function hideSubmitBtn () {
  $('#submitBtn').addClass('d-none')
  $('#updateBtn').removeClass('d-none')
}

//====================================================
function getUsers () {
  var data = { action: 'getUsers' }

  $.post('models/dashboard_model.php', data, function (response) {
    let users = JSON.parse(response) // Convert JSON string to JS object
    let rows = ''

    users.forEach((user, index) => {
      rows += `
          <tr>
              <td>${index + 1}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.contact_number}</td>
              <td>${user.address}</td>
              <td>
                  <button class="btn btn-danger btn-sm delete-user" data-id="${
                    user.id
                  }">
                      <i class="fa fa-trash-o" aria-hidden="true"></i> &nbsp; Delete
                  </button>
                  <button
                    class='btn btn-warning btn-sm update-user'
                    data-id='${user.id}'
                    >
                    Update
                    </button>

              </td>
              
          </tr>
        `
    })

    $('#userTableBody').html(rows)
  })
}

function updateUser () {
  var name = $('#name').val()
  var email = $('#email').val()
  var contact_number = $('#contact').val()
  var address = $('#address').val()
  let userId = $('#userId').val()

  console.log('userId:', userId)

  var data = {
    action: 'updateUser',
    id: userId,
    name: name,
    email: email,
    contact_number: contact_number,
    address: address
  }

  $.post('models/dashboard_model.php', data, function (response) {
    if (response == '1') {
      Swal.fire({
        title: 'User updated successfully',
        icon: 'success',
        draggable: true
      })
      clear_form()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error updating user',
        footer: ''
      })
    }
  })
}

function clear_form () {
  console.log('clear form called')

  $('#name').val('')
  $('#email').val('')
  $('#contact').val('')
  $('#address').val('')
  $('#userId').val('')
  $('#submitBtn').removeClass('d-none')
  $('#updateBtn').addClass('d-none')
  getUsers()
}
