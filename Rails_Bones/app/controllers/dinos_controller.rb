class DinosController < ApplicationController

def index
  dinos = Dino.all
  render json: dinos.to_json
end

def create
  dino = Dino.create(dino_params)
  render json: dino.to_json
end

def update
  dino = Dino.find(params[:id])
  Dino.update(dino_params)
  render json: dino.to_json
end

def destroy
  dino = Dino.find(params[:id])
  dino.destroy
  render json: dino.to_json
end

private

  def dino_params
    params.require(:dino).permit(:name, :species, :size)
  end

end
