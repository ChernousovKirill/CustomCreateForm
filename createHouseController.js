({
    handleCreateHouse: function(component, event) {
        var saveHouseAction = component.get("c.createHouse");
            saveHouseAction.setParams({
                "house": component.get("v.newHouse")
            });
        
        // Configure the response handler for the action
        saveHouseAction.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.message", "House created successfully");
            }
            else if (state === "ERROR") {
                console.log('Problem saving house, response state: ' + state);
            }
            else {
                console.log('Unknown problem, response state: ' + state);
            }
        });
 
        // Send the request to create the new house
        $A.enqueueAction(saveHouseAction);
    },
})
