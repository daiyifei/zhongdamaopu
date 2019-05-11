// miniprogram/pages/info/info.js
import { isManager } from '../../utils.js'
const rewardsStep = 20;
var rewardsMax = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showManager: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    isManager(res => {
      if (res) {
        that.setData({
          showManager: true
        });
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '关于 - 中大猫谱'
    }
  },

  clickbtn(e) {
    const to = e.currentTarget.dataset.to;
    if (!to) {
      wx.showToast({
        title: 'Nothing...',
      });
      // wx.cloud.callFunction({
      //   name: 'getPhotoRank',
      //   complete: console.log
      // })
      return false;
    }
    wx.navigateTo({
      url: to,
    });
  },
})