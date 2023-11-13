function filter_list(l) {
    let newtab = []
    for (var i = 0; i < l.length; i++) { 
      if (typeof l[i].length !== "number")
      newtab.push(l[i])
    }
    return newtab
  }   
    