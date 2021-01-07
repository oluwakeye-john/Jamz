export class Player {
  private src: string = ''

  private audio: HTMLAudioElement | null
  public isPlaying: boolean = false

  constructor() {
    if (process.client) {
      this.audio = new Audio()
    } else {
      this.audio = null
    }
  }

  private changeSrc(url: string) {
    this.src = url
  }

  getCurrentInfo() {
    return {
      duration: this.audio?.duration,
      currentTime: this.audio?.currentTime,
    }
  }

  getDuration() {
    return this.audio?.duration || 0
  }

  getCurrentTime() {
    return this.audio?.currentTime || 0
  }

  seek(val: number) {
    if (this.audio?.currentTime) {
      this.audio.currentTime = val
    }
  }

  play(url?: string, onDone?: any) {
    if (url) {
      if (this.audio) {
        this.changeSrc(url)
        this.audio.src = this.src
        this.audio.load()
        this.audio.addEventListener('canplay', onDone)
        // this.play()
      }
    } else {
      this.audio?.play()
      this.isPlaying = true
    }
  }

  pause() {
    this.audio?.pause()
    this.isPlaying = false
  }

  toggle() {
    if (this.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
  }

  stop() {
    //
  }
}

const player = new Player()

export default player
