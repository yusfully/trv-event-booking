export const validate = formValues => {
    const errors = {};
    
    if (!formValues.hotel || !formValues.hotel.length) {
      errors.hotel = { _error: 'At least one member must be entered' }
    } else {
      const membersArrayErrors = []
      formValues.hotel.forEach((member, memberIndex) => {
        const memberErrors = {}
        if (!member || !member.name) {
          memberErrors.name = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.description) {
          memberErrors.description = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.name) {
          memberErrors.name = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.description) {
          memberErrors.description = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.distance_to_venue) {
            memberErrors.distance_to_venue = 'Required'
            membersArrayErrors[memberIndex] = memberErrors
          }
          if (!member || !member.rating) {
            memberErrors.rating = 'Required'
            membersArrayErrors[memberIndex] = memberErrors
          }
          const hobbyArrayErrors = []
        if (member.rooms && member.rooms.length) {
          const hobbyErrors = {}
          member.rooms.forEach((hobby, hobbyIndex) => {
            if (!hobby || !hobby.name) {
              hobbyErrors.name= 'Required'
              hobbyArrayErrors[hobbyIndex] = hobbyErrors
            }
            if (!hobby || !hobby.description) {
                hobbyErrors.description= 'Required'
                hobbyArrayErrors[hobbyIndex] = hobbyErrors
            }
            if (!hobby || !hobby.price_in_usd) {
                hobbyErrors.price_in_usd= 'Required'
                hobbyArrayErrors[hobbyIndex] = hobbyErrors
            }
            if (!hobby || !hobby.max_occupancy) {
                hobbyErrors.max_occupancy= 'Required'
                hobbyArrayErrors[hobbyIndex] = hobbyErrors
            }
              

          })
          if(hobbyArrayErrors.length) {
            
            memberErrors.rooms = hobbyArrayErrors
            membersArrayErrors[memberIndex] = memberErrors
          }
          
        }
        return memberErrors
      })
      if(membersArrayErrors.length) {
        
        errors.hotel = membersArrayErrors
      }
    }
  
    return errors;
  };

  export default validate