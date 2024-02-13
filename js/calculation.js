document.addEventListener('DOMContentLoaded', function() {
    // List of input names that will be part of the addition calculation
    const inputNames = [
        'entry1_type_entree_cost',
        'entry1_item1_cost',
        'entry1_item2_cost',
        'entry1_item3_cost',
        'entry1_additional_instruction_cost',
        'entry1_specific_condiment_cost',
        'entry1_beverage_cost'
    ];

    // Function to calculate the totals
    function calculateTotal() {
        let total = 0;
        
        // Loop through each input for addition and add its numeric value to the total
        inputNames.forEach(function(name) {
            const input = document.querySelector('input[name="' + name + '"]');
            const value = parseFloat(input.value) || 0;
            total += value;
        });

        // Update the TTL NET input
        const totalInput = document.querySelector('input[name="entry1_ttl"]');
        totalInput.value = total.toFixed(2); // Formats the total to two decimal places

        

        // Subtract entry1_tax from entry1_ttl and update entry1_gross
        const taxInput = document.querySelector('input[name="entry1_tax"]');
        const taxValue = parseFloat(taxInput.value) || 0;
        const grossTotal = total - taxValue;

        const grossInput = document.querySelector('input[name="entry1_gross"]');
        grossInput.value = grossTotal.toFixed(2); // Formats the gross total to two decimal places

        // Update the Gross to the Total Entry 
        const entry1Total = document.querySelector('input[name="entry1_total"]');
        entry1Total.value = grossTotal.toFixed(2); // Formats the total to two decimal places

        updateTotalAmount();
    }

    // Add change event listener to each input for recalculating totals when their values change
    inputNames.forEach(function(name) {
        const input = document.querySelector('input[name="' + name + '"]');
        input.addEventListener('change', calculateTotal);
    });

    // Also recalculate when the tax input changes
    const taxInput = document.querySelector('input[name="entry1_tax"]');
    taxInput.addEventListener('change', calculateTotal);
});






document.addEventListener('DOMContentLoaded', function() {
    // List of input names that will be part of the addition calculation
    const inputNames = [
        'entry2_type_entree_cost',
        'entry2_item1_cost',
        'entry2_item2_cost',
        'entry2_item3_cost',
        'entry2_additional_instruction_cost',
        'entry2_specific_condiment_cost',
        'entry2_beverage_cost'
    ];

    // Function to calculate the totals
    function calculateTotal() {
        let total = 0;
        
        // Loop through each input for addition and add its numeric value to the total
        inputNames.forEach(function(name) {
            const input = document.querySelector('input[name="' + name + '"]');
            const value = parseFloat(input.value) || 0;
            total += value;
        });

        // Update the TTL NET input
        const totalInput = document.querySelector('input[name="entry2_ttl"]');
        totalInput.value = total.toFixed(2); // Formats the total to two decimal places

        // Subtract entry1_tax from entry1_ttl and update entry1_gross
        const taxInput = document.querySelector('input[name="entry2_tax"]');
        const taxValue = parseFloat(taxInput.value) || 0;
        const grossTotal = total - taxValue;

        const grossInput = document.querySelector('input[name="entry2_gross"]');
        grossInput.value = grossTotal.toFixed(2); // Formats the gross total to two decimal places

        // Update the Gross to the Total Entry 
        const entry1Total = document.querySelector('input[name="entry2_total"]');
        entry1Total.value = grossTotal.toFixed(2); // Formats the total to two decimal places
        
        updateTotalAmount();
    }

    // Add change event listener to each input for recalculating totals when their values change
    inputNames.forEach(function(name) {
        const input = document.querySelector('input[name="' + name + '"]');
        input.addEventListener('change', calculateTotal);
    });

    // Also recalculate when the tax input changes
    const taxInput = document.querySelector('input[name="entry2_tax"]');
    taxInput.addEventListener('change', calculateTotal);
});







document.addEventListener('DOMContentLoaded', function() {
    // List of input names that will be part of the addition calculation
    const inputNames = [
        'entry3_type_entree_cost',
        'entry3_item1_cost',
        'entry3_item2_cost',
        'entry3_item3_cost',
        'entry3_additional_instruction_cost',
        'entry3_specific_condiment_cost',
        'entry3_beverage_cost'
    ];

    // Function to calculate the totals
    function calculateTotal() {
        let total = 0;
        
        // Loop through each input for addition and add its numeric value to the total
        inputNames.forEach(function(name) {
            const input = document.querySelector('input[name="' + name + '"]');
            const value = parseFloat(input.value) || 0;
            total += value;
        });

        // Update the TTL NET input
        const totalInput = document.querySelector('input[name="entry3_ttl"]');
        totalInput.value = total.toFixed(2); // Formats the total to two decimal places

        // Subtract entry1_tax from entry1_ttl and update entry1_gross
        const taxInput = document.querySelector('input[name="entry3_tax"]');
        const taxValue = parseFloat(taxInput.value) || 0;
        const grossTotal = total - taxValue;

        const grossInput = document.querySelector('input[name="entry3_gross"]');
        grossInput.value = grossTotal.toFixed(2); // Formats the gross total to two decimal places

        // Update the Gross to the Total Entry 
        const entry1Total = document.querySelector('input[name="entry3_total"]');
        entry1Total.value = grossTotal.toFixed(2); // Formats the total to two decimal places

        updateTotalAmount();
    }

    // Add change event listener to each input for recalculating totals when their values change
    inputNames.forEach(function(name) {
        const input = document.querySelector('input[name="' + name + '"]');
        input.addEventListener('change', calculateTotal);
    });

    // Also recalculate when the tax input changes
    const taxInput = document.querySelector('input[name="entry3_tax"]');
    taxInput.addEventListener('change', calculateTotal);
});




function updateTotalAmount() {
    // Retrieve the gross values
    const entry1GrossValue = parseFloat(document.querySelector('input[name="entry1_gross"]').value) || 0;
    const entry2GrossValue = parseFloat(document.querySelector('input[name="entry2_gross"]').value) || 0;
    const entry3GrossValue = parseFloat(document.querySelector('input[name="entry3_gross"]').value) || 0;

    // Calculate the sum of the gross values
    const totalAmount = entry1GrossValue + entry2GrossValue + entry3GrossValue;

    // Update the total_amount input field
    document.querySelector('input[name="total_amount"]').value = totalAmount.toFixed(2); // Ensure the value is formatted to two decimal places
}

// Call updateTotalAmount() at the end of each calculateTotal() function for entries 1, 2, and 3
// For example, adding it to the end of each calculateTotal() function:
// updateTotalAmount();








