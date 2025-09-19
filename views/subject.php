<!-- Bootstrap CSS CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-5">
    <h2 class="fw-bold">Add Subject</h2>
    <form>
        <div class="mb-3">
            <label for="subjectName" class="form-label">Subject Name</label>
            <input type="text" class="form-control" id="subjectName" name="subjectName" required>
        </div>
        <div class="mb-3">
            <label for="subjectCode" class="form-label">Subject Code</label>
            <input type="text" class="form-control" id="subjectCode" name="subjectCode" required>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" name="description" rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-success" id="subjectAddBtn">Add Subject</button>
    </form>
    <table class="table table-striped mt-5">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Subject Name</th>
                <th scope="col">Subject Code</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody id="subjectTableBody">
            <!-- Subject data will be populated here -->

        </tbody>
    </table>
</div>


<!-- Bootstrap JS Bundle CDN -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="controllers/subject_controller.js"></script>
<?php
