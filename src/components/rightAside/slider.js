import React, { Component } from 'react';

var timer = {}, index = 0;
class Slider extends Component {
  constructor(props) {
    super(props);
    const { speed, bots, interval, imgs } = this.props.options;
    var dir = [{name: 'middle'},{name: 'start'},{name: 'end'}];
    var defaultimgs = [
      "http://p1.music.126.net/_D4aUTl9DJbDe8PEiLxZaQ==/109951163747832164.jpg",
      "http://p1.music.126.net/_D4aUTl9DJbDe8PEiLxZaQ==/109951163747832164.jpg",
      "http://p1.music.126.net/_D4aUTl9DJbDe8PEiLxZaQ==/109951163747832164.jpg"
    ]
    if (imgs) {
      if (imgs.length > 3) {
        for(var i = 0, dirLen = imgs.length - 3; i< dirLen; i++) {
          dir.splice(dir.length-1, 0, { name: 'normal' });
          defaultimgs.push("http://p1.music.126.net/_D4aUTl9DJbDe8PEiLxZaQ==/109951163747832164.jpg");
        }
      } else {
        for (var j =0, imgLen = 3 - imgs.length; j < imgLen; j++) {
          imgs.push("http://p1.music.126.net/_D4aUTl9DJbDe8PEiLxZaQ==/109951163747832164.jpg")
        }
      }
    }
    this.state = {
      dir: dir,
      currentKey: '',
      options: {
        speed: speed || 5000, // default 5000
        bots: bots || true, // show bots default true
        interval: interval || true, // isopen interval
        imgs: imgs || defaultimgs
      }
    }
  }
  handleSlider(item, key) {
    this.setState({ currentKey: key });
    index = key;
    this.imgArr(item, key);
  }
  async imgArr(item) {
    let dirCopy = this.state.dir;
    if (item.name === 'start') {
      const pop = await dirCopy.pop(); // 从数组尾部弹出一个元素
      dirCopy.unshift(pop); // 尾部元素添加到数组头部
    } else if (item.name === 'end') {
      const pop = await dirCopy.shift(); // 从数组头部弹出一个元素
      dirCopy.push(pop); // 头部元素添加到数组尾部
    }
    this.setState({
      dir: dirCopy
    });  // 保存重新排列的数组 并触发render
  }
  pointFunc(key) { // 按钮点击
    const { currentKey } = this.state;
    const dirCopy = this.state.dir;
    index = key;
    if (key < currentKey) { // 鼠标经过左侧的按钮
      for (let i = 0; i < (currentKey - key); i += 1) { // 判断距离
        const shift = dirCopy.shift(); // 进行数组操作
        dirCopy.push(shift);
      }
    } else if (key > currentKey) { // 鼠标经过右侧的按钮
      for (let i = 0; i < (key - currentKey); i += 1) {
        const pop = dirCopy.pop();
        dirCopy.unshift(pop);
      }
    }
    this.setState({ dir: dirCopy }); // 触发react-render重新渲染页面
    this.setState({ currentKey: key }); // 记录当前图片节点
  }
  handleEnterSlider() {
    this.state.options.interval && clearInterval(timer)
  }
  handleLeaveSlider() {
    this.state.options.interval && this.handleSetInterval()
  }
  handleSetInterval() {
    const { speed } = this.state.options;
    timer = setInterval(() => {
      index ++;
      index = index > 5 ? 0 : index;
      this.pointFunc(index)
    }, speed)
  }
  componentDidMount() {
    this.state.options.interval && this.handleSetInterval()
  }
  componentWillUnmount () {
    this.state.options.interval && clearInterval(timer)
  }
  render () {
    const { dir, currentKey } = this.state;
    const { imgs, bots } = this.state.options;
    return (
      <div className="slider"
        onMouseEnter={() => this.handleEnterSlider()}
        onMouseLeave={() => this.handleLeaveSlider()}>
        <div className="slider-box">
          {
            dir.map((item, key) => {
              return (
                <div className={`slider-item slider-${item.name}`} key={key}>
                  <img src={imgs[key]} alt="banner"/>
                  <div className={ item.name === 'middle' ? '' : 'masking' } onClick={ () => {this.handleSlider(item, key)} }></div>
                </div>
              )
            })
          }
        </div>
        <div className={ bots ? 'slider-bots' : 'slider-bots slider-bots-hide' }>
          <div className="slider-point">
            {
              dir.map((item, key) => {
                return (
                  <span key={key} className={item.name === 'middle' ? 'point-hover': ''} onMouseEnter={() => this.pointFunc(key)}></span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Slider