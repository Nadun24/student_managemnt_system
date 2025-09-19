getSubjects()

$('#subjectAddBtn').on('click', function () {
  subjectAdd()
})

function subjectAdd () {
  var subject_name = $('#subjectName').val()
  var subject_code = $('#subjectCode').val()
  var description = $('#description').val()

  data = {
    action: 'addSubject',
    subject_name: subject_name,
    subject_code: subject_code,
    description: description
  }

  $.post('models/subject_model.php', data, function (response) {
    if (response == '1') {
      Swal.fire({
        title: 'Subject added successfully',
        icon: 'success',
        draggable: true
      })
      clearForm()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error adding subject',
        footer: ''
      })
    }
  })
}

function getSubjects () {
  var data = {
    action: 'getSubjects'
  }
  $.post('models/subject_model.php', data, function (response) {
    let subjects = JSON.parse(response)
    let rows = ''

    subjects.forEach((subject, index) => {
      rows += `
            <tr>
              <td>${index + 1}</td>
              <td>${subject.subject_name}</td>
              <td>${subject.subject_code}</td>
              <td>${subject.description}</td>
              <td>
                <button class="btn btn-danger delete-subject" data-id="${
                  subject.id
                }">Delete</button>
                <button class="btn btn-warning update-subject" data-id="${
                  subject.id
                }">Update</button>
              </td>
            </tr>
          `
    })
    $('#subjectTableBody').html(rows)
  })
}

function clearForm () {
  $('#subjectName').val('')
  $('#subjectCode').val('')
  $('#description').val('')
}
