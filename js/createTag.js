class createTag{
  constructor(type, style, attr, value){
    return jQuery(`<${type}/>`).attr(attr).css(style);
  }
}

export default createTag;