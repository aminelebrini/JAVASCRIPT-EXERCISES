function connection_data_base()
{
    console.log("reussite de connection de la base de donné");
}
function data_fetching(call_back)
{
    call_back();
    console.log('data fetched');
}
function rendering()
{
    data_fetching(connection_data_base);
    console.log('data rendered');
}

rendering();