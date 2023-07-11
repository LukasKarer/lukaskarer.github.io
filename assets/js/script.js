// Browser support https://caniuse.com/#feat=css-appearance
let _supabase = null;
let _uuid = null;
window.addEventListener("load", async () => {
    _uuid = localStorage.getItem("uuid") ?? crypto.randomUUID();
    localStorage.setItem("uuid", _uuid);
    _supabase = supabase.createClient('https://jqhwdgervurzowivohjx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxaHdkZ2VydnVyem93aXZvaGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwODk5NTUsImV4cCI6MjAwNDY2NTk1NX0.uWsPRy85chqcL2FLLVjADDgGSigFL7AflDOmH8ygSok')
    await _supabase
        .from('views')
        .insert({id: _uuid});
})
function clickedCB(){
    var c=document.getElementById('c1');
    var d=document.getElementById('inputDiv');
    if (c.checked) {
        d.classList.toggle("hidden");
        d.classList.add("expanded");
        return true;
    } else {
        d.classList.remove("expanded");
        d.classList.add("exiting");
        setTimeout(() => {
            d.classList.remove("exiting");
            d.classList.toggle("hidden");
        }, 500);
        return false;
    }
}

async function clickedSend() {
    const c = document.getElementById('area');
    const d = document.getElementById('thankYou');

    await _supabase
        .from('feedback')
        .insert({id: _uuid, opinion: c.value});

    c.value = '';
    d.removeAttribute('hidden');
}