$(document).ready(function () {
    $('#task-input').change(function () {
        var toAdd = $(this).val();
        
        $('#task-list').append(`
            <li>
                ${toAdd}
                <span class="check-icon"><i class="fa fa-check"></i></span>
                <span class="trash-icon"><i class="fa fa-trash"></i></span>
            </li>
        `);

        $(this).val('');
    });

    $('#task-list').on('click', '.check-icon', function () {
        $(this).closest('li').toggleClass('done');
    });

    $('#task-list').on('click', '.trash-icon', function () {
        $(this).closest('li').fadeOut(500, function () {
            $(this).remove();
        });
    });
});
