// ===================================
// EVENTRA SMART BUDGET CALCULATOR
// ===================================

function calculateBudget(){

const eventType =
parseInt(
document.getElementById("eventType").value
);

const guestCount =
parseInt(
document.getElementById("guestCount").value
);

const decorationLevel =
parseFloat(
document.getElementById("decorationLevel").value
);

const result =
document.getElementById("result");

if(
isNaN(guestCount)
||
guestCount <= 0
){

result.innerHTML =

`
Please enter a valid
number of guests.
`;

return;

}

const totalBudget =
eventType *
guestCount *
decorationLevel;

const decoration =
totalBudget * 0.20;

const catering =
totalBudget * 0.45;

const photography =
totalBudget * 0.15;

const entertainment =
totalBudget * 0.10;

const miscellaneous =
totalBudget * 0.10;

result.innerHTML =

`
<h3>
Estimated Budget
</h3>

<h2>
₹ ${totalBudget.toLocaleString("en-IN")}
</h2>

<div class="budget-breakdown">

<p>
🎨 Decoration:
₹ ${decoration.toLocaleString("en-IN")}
</p>

<p>
🍽️ Catering:
₹ ${catering.toLocaleString("en-IN")}
</p>

<p>
📸 Photography:
₹ ${photography.toLocaleString("en-IN")}
</p>

<p>
🎵 Entertainment:
₹ ${entertainment.toLocaleString("en-IN")}
</p>

<p>
📋 Miscellaneous:
₹ ${miscellaneous.toLocaleString("en-IN")}
</p>

</div>
`;

}