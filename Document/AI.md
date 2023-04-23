# OpenAI
## ChatPGT平替
[ChatGPT 3.5](https://huggingface.co/cerebras/Cerebras-GPT-13B)
[ChatGPT 4](https://github.com/nomic-ai/gpt4all)
[MiniGPT 4](https://github.com/Vision-CAIR/MiniGPT-4)
[Open-Assistant](https://github.com/LAION-AI/Open-Assistant)

## 图片生成
[openai dall 需要OpenAI账号](https://openai.com/product/dall-e-2)

## 图片视频修复
[视频修复](https://github.com/sczhou/CodeFormer)
```text
准备：
下载以下软件：
https://www.python.org/downloads/
https://www.anaconda.com/products/distribution
https://git-scm.com/downloads
https://pytorch.org/get-started/locally/

Windows conda 独立显卡 conda install pytorch torchvision torchaudio pytorch-cuda=11.8 -c pytorch -c nvidia
Windows conda CPU conda install pytorch torchvision torchaudio cpuonly -c pytorch
Windows pip 独立显卡 pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
Windows pip CPU pip3 install torch torchvision torchaudio

克隆项目：
git clone https://github.com/sczhou/CodeFormer
cd CodeFormer
在conda终端中执行
conda create -n codeformer python=3.11 -y
conda activate codeformer
在powershell终端中执行
pip3 install -r requirements.txt -q
pip3 install -q gradio
python basicsr/setup.py develop
```

## 自动生成视频
[remotion](https://github.com/remotion-dev/remotion)
[ChatPaper](https://github.com/kaixindelele/ChatPaper)

## 模型
[人体模型](https://github.com/iPERDance/iPERCore)
