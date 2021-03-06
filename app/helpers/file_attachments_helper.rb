# redMine - project management software
# Copyright (C) 2006-2007  Jean-Philippe Lang
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 2
# of the License, or (at your option) any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

module FileAttachmentsHelper
  # Displays view/delete links to the attachments of the given object
  # Options:
  #   :author -- author names are not displayed if set to false
  def link_to_attachments(container, options = {})
    options.assert_valid_keys(:author)
    
    if container.file_attachments.any?
      options = {:deletable => container.attachments_deletable?, :author => true}.merge(options)
      render :partial => 'attachments/links', :locals => {:attachments => container.file_attachments, :options => options}
    end
  end
  
  def to_utf8(str)
    str
  end
end
