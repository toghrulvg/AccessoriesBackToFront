$(document).ready(function () {

    // HEADER


    $(document).on("click", ".show-more button", function () {


        console.log("12")



        $.ajax({
            /* url: `/product/loadmore?skip=${skipCount}`,*/
            url: "/product/loadmore",
            type: "Get",
            data: {
                skip: skipCount
            },
            success: function (res) {

                $(parent).append(res);
                skipCount = $("#parent-products").children().length;

                if (skipCount >= productCount) {

                    $(".show-more button").addClass("d-none");
                }




            }
        })

    });
})