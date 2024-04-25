
var db;
var t_date, t_code, t_receiver_name, t_bank_name,t_bank_address,t_account_number,t_routing_number,t_amount;
    $('document').ready(
        function(){
            
           
        }
    );
    console.log("Document is ready");
    function getVaultDetails(acc){
        console.log("Please Wait...");
        //$('#progress-2').removeClass('hide');
        //Load
        var docRef = firebase.firestore().collection("VAULT").doc(acc);
    
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                $('#acc-cnt-2 .depositor_name').text( doc.data().depositor_name);
                $('#acc-cnt-2 .represented_by').text( doc.data().represented_by);
                $('#nameOfDepositor').text( doc.data().depositor_name);
    
                $('#acc-cnt-2  .email_address').text( doc.data().email_address);
                $('#acc-cnt-2  .next_of_kin').text( doc.data().next_of_kin);
                $('#nameOfBeneficiary').text( doc.data().next_of_kin);
                $('#dateOfDeposit').text( doc.data().initial_deposit);
                $('#purposeOfDeposit').text( doc.data().purpose_of_deposit);
                $('#monthlyCharges').text( doc.data().monthly_charges);

                $('#acc-cnt-2 .initial_deposit').text( doc.data().initial_deposit);
                $('#acc-cnt-2 .address_depositor').text( doc.data().address);
    
                $('#acc-cnt-2 .content_item').text( doc.data().content_item);
                $('#itemDeposited').text( doc.data().content_item);

                $('#acc-cnt-2 .content_box_type').text( doc.data().content_box_type);
                $('#acc-cnt-2 .content_box_quantity').text( doc.data().content_box_quantity);
                $('#acc-cnt-2 .content_duration').text( doc.data().content_duration);
                $('#acc-cnt-2 .content_total').text( doc.data().content_total);
                $('#acc-cnt-2 .content_status').text( doc.data().content_status);
                $('#acc-cnt-2 .content_date').text( doc.data().content_date);
    
                $('#acc-cnt-2 .custodial_ref_no').text( doc.data().custodial_ref_no);
                $('#acc-cnt-2 .custodial_issue_date').text( doc.data().custodial_issue_date);
                $('#acc-cnt-2 .custodial_release').text( doc.data().custodial_release);
                $('#acc-cnt-2 .custodial_extension').text( doc.data().custodial_extension);
                $('#acc-cnt-2 .custodial_days_left').text( doc.data().custodial_days_left);
                $('#acc-cnt-2 .custodial_status').text( doc.data().custodial_status);
                $('#acc-cnt-2 .custodial_last_updated_date').text( doc.data().custodial_last_updated_date);
    
                $('#acc-cnt-2 .payment_paid').text( doc.data().payment_paid);
                $('#acc-cnt-2 .payment_balance').text( doc.data().payment_balance);
                $('#acc-cnt-2 .payment_time').text( doc.data().payment_time);
                $('#acc-cnt-2 .payment_content').text( doc.data().content_item);
    
                $('#progress-2').addClass('hide');
            } else {
                // ALERT USER THERE IS NO SUCH DOC
                console.log("No such document!");
                $('#progress-2').addClass('hide');
            }
        }).catch((error) => {
            //ALERT USER OF FAILURE AND PROCEED TO NEXT ACTION
            console.log("Error getting document:", error);
            if (error == " FirebaseError: Failed to get document because the client is offline.") {
                console.log('It is that error.');
            }
            $('#progress-2').addClass('hide');
        });
    }

    function getDepositorName(){
        // Add a new document in collection "cities"
        var docRef = firebase.firestore().collection("account1").doc("name_of_depositor");

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                nameOfDepositor = doc.data().name_of_depositor;
                $('.nod').text(nameOfDepositor);
                console.log('Name of depositor: '+nameOfDepositor);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    function getAddressOfDepositor(){
        // Add a new document in collection "cities"
        var docRef = firebase.firestore().collection("account1").doc("address");

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                $('.address_db').text(doc.data().address);
                console.log('Address of depositor: '+doc.data().address);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
