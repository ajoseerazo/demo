class User < ActiveRecord::Base
	attr_accessible :firstname, :lastname, :age
end
