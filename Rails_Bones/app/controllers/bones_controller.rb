class BonesController < ApplicationController

  def index
    bones = Bone.all
    render json: bones.to_json
  end

  def create
    bone = Bone.create(bone_params)
    render json: bone.to_json
  end

  def update
    bone = Bone.find(params[:id])
    Bone.update(bone_params)
    render json: bone.to_json
  end

  def destroy
    bone = Bone.find(params[:id])
    bone.destroy
    render json: bone.to_json
  end

  private

    def bone_params
      params.require(:bone).permit(:name, :size)
    end

end
