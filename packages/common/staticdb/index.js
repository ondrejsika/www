class StaticDB {
  constructor() {
    this._db = {};
    this._cursor = [];
  }
  add(name, data) {
    this._db[name] = data;
  }
  setCursor(name) {
    this._cursor = this._db[name];
  }
  saveCursor(name) {
    this._db[name] = self._cursor;
  }
  lookupMany(source_name, foreign_name, source_id, foreign_id, as) {
    let f_id_map = {};
    for (var el of this._db[foreign_name]) {
      if (f_id_map[foreign_id]) f_id_map[el[foreign_id]].push(el);
      else f_id_map[el[foreign_id]] = [el];
    }
    for (var el of this._db[source_name]) {
      if (f_id_map[el[source_id]]) el[as] = f_id_map[el[source_id]];
      else el[as] = [];
    }
  }
  lookupOne(source_name, foreign_name, source_id, foreign_id, as) {
    this.lookupMany(source_name, foreign_name, source_id, foreign_id, as);
    for (var el of this._db[source_name]) {
      if (el[as]) el[as] = el[as][0];
      else el[as] = null;
    }
  }
  get() {
    return this._cursor;
  }
  getOne() {
    return this._cursor[0];
  }
  filter(key, val) {
    return (this._cursor = this._cursor.filter((el, i, array) => {
      return el[key] == val;
    }));
  }
  filterIn(key, val) {
    return (this._cursor = this._cursor.filter((el, i, array) => {
      return el[key] && el[key].includes(val);
    }));
  }
  filterExists(key) {
    return (this._cursor = this._cursor.filter((el, i, array) => {
      return el[key];
    }));
  }
  limit(lim) {
    this._cursor = this._cursor.slice(0, lim);
  }
}

export default StaticDB;
