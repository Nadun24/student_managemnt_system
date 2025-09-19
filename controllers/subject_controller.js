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
  var data = {}
}

function clearForm () {
  $('#subjectName').val('')
  $('#subjectCode').val('')
  $('#description').val('')
}
