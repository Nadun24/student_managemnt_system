getSubjects()

$('#subjectAddBtn').on('click', function () {
  subjectAdd()
})

$('#subjectUpdateBtn').on('click', function () {
  updateSubject()
})

$(document).on('click', '.delete-subject', function () {
  let subjectId = $(this).data('id')
  var data = { action: 'deleteSubject', id: subjectId }

  if (confirm('Are you sure you want to delete this subject?')) {
    $.post('models/subject_model.php', data, function (res) {
      if (res == '1') {
        Swal.fire({
          title: 'Subject deleted successfully',
          icon: 'success',
          draggable: true
        })
        getSubjects()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error deleting subject',
          footer: ''
        })
      }
    })
  }
})

$(document).on('click', '.update-subject', function () {
  let subjectId = $(this).data('id')
  hideUpdateBtn()
  $data = {
    action: 'getSubjectById',
    id: subjectId
  }
  $.post('models/subject_model.php', $data, function (response) {
    let subject = JSON.parse(response)

    $('#subjectName').val(subject[0].subject_name)
    $('#subjectCode').val(subject[0].subject_code)
    $('#description').val(subject[0].description)
    $('#subjectId').val(subject[0].id)
  })
})

function hideUpdateBtn () {
  $('#subjectAddBtn').addClass('d-none')
  $('#subjectUpdateBtn').removeClass('d-none')
}

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

//=======================================================

function updateSubject () {
  var subject_name = $('#subjectName').val()
  var subject_code = $('#subjectCode').val()
  var description = $('#description').val()
  let subjectId = $('#subjectId').val()

  var data = {
    action: 'updateSubject',
    id: subjectId,
    subject_name: subject_name,
    subject_code: subject_code,
    description: description
  }

  $.post('models/subject_model.php', data, function (response) {
    if (response == '1') {
      Swal.fire({
        title: 'Subject updated successfully',
        icon: 'success',
        draggable: true
      })
      clearForm()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error updating subject',
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
  $('#subjectId').val('')
  $('#subjectAddBtn').removeClass('d-none')
  $('#subjectUpdateBtn').addClass('d-none')
  // Refresh the subject list
  getSubjects()
}
